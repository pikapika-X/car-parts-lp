import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronRight, Globe, Mail, Package, Search, ShieldCheck, Truck, Wrench } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold text-xl tracking-wider">GLOBAL PARTS IMPORT</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-primary transition-colors">選ばれる理由</button>
            <button onClick={() => scrollToSection("recommend")} className="text-sm font-medium hover:text-primary transition-colors">こんな方へ</button>
            <button onClick={() => scrollToSection("products")} className="text-sm font-medium hover:text-primary transition-colors">取扱実績</button>
            <button onClick={() => scrollToSection("flow")} className="text-sm font-medium hover:text-primary transition-colors">ご利用の流れ</button>
            <Button onClick={() => scrollToSection("contact")} variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              無料相談する
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-2xl">
            <button onClick={() => scrollToSection("features")} className="text-left py-2 px-4 hover:bg-muted rounded">選ばれる理由</button>
            <button onClick={() => scrollToSection("recommend")} className="text-left py-2 px-4 hover:bg-muted rounded">こんな方へ</button>
            <button onClick={() => scrollToSection("products")} className="text-left py-2 px-4 hover:bg-muted rounded">取扱実績</button>
            <button onClick={() => scrollToSection("flow")} className="text-left py-2 px-4 hover:bg-muted rounded">ご利用の流れ</button>
            <Button onClick={() => scrollToSection("contact")} className="w-full font-bold">無料相談する</Button>
          </div>
        )}
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="Engine Bay" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-black/40"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container relative z-10 px-4 py-20 text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-black/50 border border-primary/50 rounded-full backdrop-blur-md shadow-lg">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">海外カーパーツ輸入実績ナンバーワン ※当社調べ</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight drop-shadow-2xl">
              <span className="block text-white drop-shadow-md">海外製カーパーツを</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary mt-2 drop-shadow-sm">もっと身近に、もっと安心して。</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md font-medium">
              大手通販モールでの豊富な販売実績と信頼。<br className="hidden md:block" />
              国内では手に入りにくい海外製カーパーツを、確かなルートと実績でお届けします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={() => scrollToSection("contact")} size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(249,115,22,0.3)] border-2 border-primary/50">
                <Search className="mr-2 h-5 w-5" />
                パーツ探しを相談する（無料）
              </Button>
              <Button onClick={() => scrollToSection("features")} variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-background/50 backdrop-blur border-muted-foreground/30 hover:bg-muted/50">
                詳しく見る
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Solution Section */}
        <section className="py-20 bg-muted/30 relative">
          <div className="absolute inset-0 bg-metal-texture opacity-30"></div>
          <div className="container relative z-10 px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">こんな悩みを解決するために</h2>
              <p className="text-muted-foreground">私たちは海外パーツ専門の調達・販売を行っています。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Package className="h-10 w-10" />, title: "安く手に入れたい", desc: "海外製パーツを現地価格に近い価格で" },
                { icon: <Search className="h-10 w-10" />, title: "見つからない", desc: "国内では廃番・未流通のパーツを探している" },
                { icon: <ShieldCheck className="h-10 w-10" />, title: "適合が不安", desc: "本当に自分の車に合うか心配" },
                { icon: <Globe className="h-10 w-10" />, title: "手続きが面倒", desc: "国際送料や通関手続きが複雑で不安" },
              ].map((item, index) => (
                <Card key={index} className="bg-card/50 border-border/50 backdrop-blur hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center flex flex-col items-center h-full">
                    <div className="mb-4 p-4 rounded-full bg-muted group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-background relative overflow-hidden">
          <div className="container px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">当社が選ばれる理由</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Feature 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-2xl border border-primary/30">01</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    大手通販モールでの豊富な実績
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    当社はこれまで、ヤフオク・楽天市場など大手通販モールを中心に多数の海外カーパーツを販売してきました。
                    継続的な販売実績と評価を積み重ね、「海外パーツでも安心して購入できる店舗」として多くのお客様にご利用いただいています。
                  </p>
                  <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                    {/* Logos placeholder text for now */}
                    <div className="px-4 py-2 bg-white text-black font-bold rounded text-sm">Yahoo! Shopping</div>
                    <div className="px-4 py-2 bg-white text-black font-bold rounded text-sm">Rakuten</div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-2xl border border-primary/30">02</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">海外製パーツを、できるだけ安く</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    海外現地のサプライヤーと直接取引を行い、中間コストを抑えた仕入れを実現しています。
                    海外製で安く手に入るパーツを、無駄なコストをかけずにご提供します。
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-2xl border border-primary/30">03</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">国際送料・国内送料ともに無料</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    海外からの輸入にかかる国際送料・国内送料はすべて当社負担。
                    価格が分かりにくくなりがちな海外輸入でも、安心してご相談いただけます。
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-2xl border border-primary/30">04</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">適合確認までしっかり対応</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    海外パーツで最も多い不安が「本当に自分の車に合うのか？」という点。
                    当社では、車種・年式・型式・パーツ情報をもとに、可能な限り照合を行います。
                  </p>
                  <div className="bg-muted/50 p-4 rounded border border-border/50 text-sm">
                    <p className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 写真をご提供いただければ、より正確な確認が可能です。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended For Section */}
        <section id="recommend" className="py-20 bg-muted/20 border-y border-border/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 flex flex-col justify-center">
                  <h2 className="text-3xl font-heading font-bold mb-8">こんな方におすすめです</h2>
                  <ul className="space-y-4">
                    {[
                      "国内でパーツが見つからない",
                      "廃番・海外限定パーツを探している",
                      "ディーラーでは対応できなかった",
                      "個人輸入は不安・面倒",
                      "確実に合うパーツを手に入れたい"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="/images/mechanic-check.jpg" 
                    alt="Mechanic checking parts" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-background">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">取扱・調達実績</h2>
              <p className="text-muted-foreground">※下記はこれまでに取り扱った商品の一例です</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                "海外OEMエンジンパーツ", "足回り・サスペンション", "エアロパーツ", "内装アクセサリー", "外装アクセサリー",
                "電装部品", "補修部品", "ターボチャージャー", "インタークーラー", "クラッチキット",
                "ECUユニット", "ヘッドライト", "テールランプ", "ボディキット", "シートパーツ",
                "ステアリングホイール", "シフトノブ", "ブレーキキャリパー", "エキゾーストマニホールド", "ラジエーター"
              ].map((item, i) => (
                <div key={i} className="group relative aspect-square bg-muted rounded-lg overflow-hidden border border-border/50 hover:border-primary transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  {/* Placeholder for product images - using a generic pattern or the generated image crop if possible, 
                      but for now using a colored div to represent image */}
                  <div className="absolute inset-0 bg-muted-foreground/10 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  {/* Using the generated parts collection image as background for all for demo purposes, 
                      in real app would be individual images */}
                  <img src="/images/parts-collection.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" alt={item} />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                    <p className="text-xs md:text-sm font-bold text-white text-center">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg font-medium flex items-center justify-center gap-2">
                <span className="text-primary text-2xl">👉</span> 掲載商品以外も調達可能です。
              </p>
            </div>
          </div>
        </section>

        {/* Flow Section */}
        <section id="flow" className="py-20 bg-muted/30 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container relative z-10 px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">ご購入・ご相談の流れ</h2>
            </div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                {[
                  { step: "01", title: "お問い合わせ", icon: <Mail className="h-6 w-6" /> },
                  { step: "02", title: "確認・ご案内", icon: <Search className="h-6 w-6" /> },
                  { step: "03", title: "お見積り", icon: <Package className="h-6 w-6" /> },
                  { step: "04", title: "ご注文", icon: <Check className="h-6 w-6" /> },
                  { step: "05", title: "発送・納品", icon: <Truck className="h-6 w-6" /> },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center bg-background p-6 rounded-lg border border-border shadow-lg">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4 shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                      {item.icon}
                    </div>
                    <span className="text-sm text-primary font-bold mb-1">STEP {item.step}</span>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
          <div className="container relative z-10 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold mb-4">
                  まずはお気軽にご相談ください
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">パーツ探しのご相談を承っています</h2>
                <p className="text-muted-foreground mb-8">
                  「買うかどうか決まっていない」「見つかるか分からない」<br />
                  そんな段階でも問題ありません。探せるかどうか、まずは一度ご相談ください。
                </p>
              </div>

              <Card className="border-primary/30 shadow-[0_0_30px_rgba(0,0,0,0.3)] bg-card/80 backdrop-blur">
                <CardHeader className="bg-muted/50 border-b border-border">
                  <CardTitle className="flex items-center gap-2">
                    <Search className="text-primary" />
                    お問い合わせフォーム
                  </CardTitle>
                  <CardDescription>
                    以下の情報を入力して送信してください。担当者が確認後、ご連絡いたします。
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="car-model">車種 <span className="text-destructive">*</span></Label>
                      <Input id="car-model" placeholder="例：日産 スカイライン GT-R" className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="car-year">年式</Label>
                      <Input id="car-year" placeholder="例：1999年式" className="bg-background/50" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="car-type">型式</Label>
                    <Input id="car-type" placeholder="例：BNR34" className="bg-background/50" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="part-name">探しているパーツ名 <span className="text-destructive">*</span></Label>
                    <Input id="part-name" placeholder="例：純正リアウイング、NISMOメーターなど" className="bg-background/50" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">詳細・備考</Label>
                    <Textarea id="message" placeholder="その他の詳細やご要望があればご記入ください" className="min-h-[100px] bg-background/50" />
                  </div>

                  <div className="space-y-2">
                    <Label>写真の添付（任意）</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <Package className="h-8 w-8 opacity-50" />
                        <span>クリックして画像をアップロード</span>
                        <span className="text-xs">※現物や車両の写真があると照合がスムーズです</span>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="w-full text-lg font-bold py-6 bg-primary hover:bg-primary/90 shadow-lg mt-4">
                    パーツ探しを相談する（無料）
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12 border-t border-border/20">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="h-5 w-5 text-primary" />
                  <span className="font-heading font-bold text-xl tracking-wider">GLOBAL PARTS IMPORT</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  当社は海外カーパーツの輸入・販売を専門に行う事業者です。
                  大手モールで培った経験と実績を活かし、自社サイトではより分かりやすく、より安心できる情報提供を行っています。
                </p>
              </div>
              <div className="flex flex-col md:items-end justify-center">
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white mb-4">
                  運営会社について
                </Button>
                <div className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} Global Parts Import. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
