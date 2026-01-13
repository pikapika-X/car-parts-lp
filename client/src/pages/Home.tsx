import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronRight, ExternalLink, Globe, Mail, MessageCircle, Package, Phone, Search, ShieldCheck, Truck, Wrench } from "lucide-react";
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

  const productsData = [
    { name: "USヘッドライト", url: "https://search.rakuten.co.jp/search/mall/%E3%83%98%E3%83%83%E3%83%89%E3%83%A9%E3%82%A4%E3%83%88/?l-id=shoptop_shopmenu_search_bar&sid=332596", image: "/images/parts/headlight.jpg" },
    { name: "USテールライト", url: "https://search.rakuten.co.jp/search/mall/%E3%83%86%E3%83%BC%E3%83%AB%E3%83%A9%E3%82%A4%E3%83%88/?l-id=shoptop_shopmenu_search_bar&sid=332596", image: "/images/parts/taillight.jpg" },
    { name: "USエアロパーツ", url: "https://search.rakuten.co.jp/search/mall/%E3%82%A8%E3%82%A2%E3%83%AD/?sid=332596", image: "/images/parts/aero.jpg" },
    { name: "USグリル", url: "https://search.rakuten.co.jp/search/mall/%E3%82%B0%E3%83%AA%E3%83%AB/?sid=332596", image: "/images/parts/grille.jpg" },
    { name: "USサイドステップ", url: "https://search.rakuten.co.jp/search/mall/%E3%82%B5%E3%82%A4%E3%83%89%E3%82%B9%E3%83%86%E3%83%83%E3%83%97/?sid=332596", image: "/images/parts/sidestep.jpg" },
    { name: "USスポイラー", url: "https://search.rakuten.co.jp/search/mall/%E3%82%B9%E3%83%9D%E3%82%A4%E3%83%A9%E3%83%BC/?sid=332596", image: "/images/parts/spoiler.jpg" },
    { name: "US幌・ソフトトップ", url: "https://search.rakuten.co.jp/search/mall/%E5%B9%8C/?sid=332596", image: "/images/parts/softtop.jpg" },
    { name: "USガルウィングキット", url: "https://search.rakuten.co.jp/search/mall/%E3%82%AC%E3%83%AB%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%B0/?sid=332596", image: "/images/parts/gullwing.jpg" },
    { name: "USクロスバー", url: "https://search.rakuten.co.jp/search/mall/%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%90%E3%83%BC/?sid=332596", image: "/images/parts/crossbar.jpg" },
    { name: "USカーゴ、ルーフ キャリア", url: "https://search.rakuten.co.jp/search/mall/%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%90%E3%83%BC/?sid=332596", image: "/images/parts/cargo.jpg" }
  ];

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
              <p className="text-muted-foreground">楽天市場でのお取り扱い商品一覧</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {productsData.map((item, i) => (
                <a 
                  key={i} 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative aspect-square bg-muted rounded-lg overflow-hidden border border-border/50 hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-muted-foreground/10 group-hover:scale-110 transition-transform duration-500"></div>
                  <img 
                    src={item.image} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" 
                    alt={item.name} 
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 z-20">
                    <p className="text-xs md:text-sm font-bold text-white text-center mb-2">{item.name}</p>
                    <div className="flex items-center gap-1 px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <ExternalLink className="h-3 w-3" />
                      楽天で見る
                    </div>
                  </div>
                </a>
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
            <div className="max-w-5xl mx-auto">
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

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-8 flex items-start gap-3">
                <div className="text-amber-500 font-bold text-lg flex-shrink-0">⚠</div>
                <div className="text-sm text-amber-50">
                  <p className="font-bold mb-1">ご購入前に必ず利用規約をお読みください</p>
                  <p className="text-xs opacity-90 mb-2">海外製パーツの特性、返品・交換条件、その他重要な注意事項が記載されています。</p>
                  <a href="/docs/terms-of-service.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors text-xs font-bold">
                    <ExternalLink className="h-3 w-3" />
                    利用規約を確認する
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Form */}
                <div className="lg:col-span-2">
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

                {/* LINE Contact Option */}
                <div className="flex flex-col gap-6">
                  <Card className="border-primary/30 shadow-lg bg-card/80 backdrop-blur h-full">
                    <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/10 border-b border-border">
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <MessageCircle className="h-5 w-5" />
                        LINEでも相談できます
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <p className="text-sm text-muted-foreground text-center mb-6">
                        QRコードをスキャンするか、下のボタンをタップしてLINEで気軽にお問い合わせください。
                      </p>
                      
                      <div className="bg-white p-4 rounded-lg mb-6">
                        <img 
                          src="/images/line-qr.png" 
                          alt="LINE QR Code" 
                          className="w-40 h-40"
                        />
                      </div>

                      <Button 
                        asChild 
                        className="w-full bg-[#00B900] hover:bg-[#00A000] text-white font-bold mb-4"
                      >
                        <a href="https://page.line.me/414xknuy" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-5 w-5" />
                          LINEで友達追加
                        </a>
                      </Button>

                      <div className="text-xs text-muted-foreground text-center">
                        <p className="font-bold mb-2">LINE ID: @414xknuy</p>
                        <p>営業時間内にご返信いたします</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-20 bg-muted/20 border-t border-border/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">運営会社について</h2>
              
              <Card className="border-border/50 shadow-lg bg-card/50 backdrop-blur">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Wrench className="h-6 w-6 text-primary" />
                      株式会社ＵＳＤＭ
                    </h3>
                    
                    <div className="space-y-4 text-muted-foreground">
                      <div className="flex gap-4 items-start">
                        <span className="font-bold text-foreground min-w-fit">住所：</span>
                        <span>〒9240857 石川県白山市福永町８５ー１F</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="font-bold text-foreground min-w-fit">電話：</span>
                        <a href="tel:08011771078" className="hover:text-primary transition-colors">080-1177-1078</a>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="font-bold text-foreground min-w-fit">FAX：</span>
                        <span>050-3588-2307</span>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="font-bold text-foreground min-w-fit">メール：</span>
                        <a href="mailto:contact@usdm.co.jp" className="hover:text-primary transition-colors">contact@usdm.co.jp</a>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="font-bold text-foreground min-w-fit">ウェブサイト：</span>
                        <a href="https://usdm.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                          https://usdm.jp/ <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <p className="text-muted-foreground leading-relaxed">
                      当社は海外カーパーツの輸入・販売を専門に行う事業者です。
                      大手モールで培った経験と実績を活かし、自社サイトではより分かりやすく、より安心できる情報提供を行っています。
                    </p>
                  </div>
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
              <div className="flex flex-col md:items-end justify-center gap-4">
                <div className="flex gap-4 text-xs text-gray-400">
                  <a href="/docs/terms-of-service.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    利用規約
                  </a>
                </div>
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
