import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import * as emailModule from "./_core/email";
import * as storageModule from "./storage";

// Mock email and storage modules
vi.mock("./_core/email");
vi.mock("./storage");

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should accept contact form submission without photos", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    // Mock email sending to succeed
    vi.spyOn(emailModule, "sendEmail").mockResolvedValue(true);

    const result = await caller.contact.submit({
      carModel: "日産 スカイライン GT-R",
      carYear: "1999年式",
      carType: "BNR34",
      partName: "純正リアウイング",
      message: "テスト問い合わせです",
    });

    expect(result).toEqual({
      success: true,
      message: "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。",
    });

    expect(emailModule.sendEmail).toHaveBeenCalledTimes(1);
    expect(emailModule.sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "contact@usdm.co.jp",
        subject: expect.stringContaining("日産 スカイライン GT-R"),
      })
    );
  });

  it("should accept contact form submission with photos", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    // Mock storage upload
    vi.spyOn(storageModule, "storagePut").mockResolvedValue({
      key: "contact-photos/test.jpg",
      url: "https://example.com/test.jpg",
    });

    // Mock email sending to succeed
    vi.spyOn(emailModule, "sendEmail").mockResolvedValue(true);

    const testPhoto = {
      filename: "test.jpg",
      data: Buffer.from("test image data").toString("base64"),
      contentType: "image/jpeg",
    };

    const result = await caller.contact.submit({
      carModel: "BMW X5",
      partName: "フロントグリル",
      photos: [testPhoto],
    });

    expect(result.success).toBe(true);
    expect(storageModule.storagePut).toHaveBeenCalledTimes(1);
    expect(emailModule.sendEmail).toHaveBeenCalledTimes(1);
  });

  it("should fail if email sending fails", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    // Mock email sending to fail
    vi.spyOn(emailModule, "sendEmail").mockResolvedValue(false);

    await expect(
      caller.contact.submit({
        carModel: "Test Car",
        partName: "Test Part",
      })
    ).rejects.toThrow("お問い合わせの送信に失敗しました");
  });

  it("should require carModel and partName", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        carModel: "",
        partName: "Test Part",
      } as any)
    ).rejects.toThrow();

    await expect(
      caller.contact.submit({
        carModel: "Test Car",
        partName: "",
      } as any)
    ).rejects.toThrow();
  });
});
