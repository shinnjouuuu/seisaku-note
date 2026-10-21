import { ArrowDown, Code, Palette, Wrench } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// カードの中身は CLAUDE.md の「3つのカード」と揃える。
// デザイン→実装→運用は作業の順番なので、並び順に意味がある（番号を振る理由）
const cards = [
  {
    icon: Palette,
    title: 'デザイン',
    tool: 'Figma',
    text: 'カンプの構成と余白を、Figma で決める',
  },
  {
    icon: Code,
    title: '実装',
    tool: 'HTML / Sass / React',
    text: 'カンプを HTML・Sass・React でコードに起こす',
  },
  {
    icon: Wrench,
    title: '運用',
    tool: 'WordPress',
    text: '公開後も更新しやすい形に WordPress で組む',
  },
]

function App() {
  return (
    <main>
      {/* ヒーロー：ノートの罫線を地に敷き、見出し・ひとこと・CTA の3つだけを置く */}
      <section className="bg-ruled">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 pt-24 pb-32">
          <h1 className="text-6xl font-bold sm:text-8xl">制作ノート</h1>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Figma と WordPress で作ったものの記録
          </p>
          <Button
            asChild
            size="lg"
            className="mt-4 h-12 cursor-pointer px-6 text-base transition-[translate,box-shadow,background-color] shadow-[0_4px_0_var(--color-primary-strong)] hover:translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_2px_0_var(--color-primary-strong)] active:translate-y-1 active:shadow-none motion-reduce:transition-none"
          >
            <a href="#works">
              やっていることを見る
              <ArrowDown aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      {/* 紹介：見出しと本文を同じ左端にそろえ、1段組で読ませる */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-bold">このページについて</h2>
          <div className="mt-6 space-y-4">
            <p className="text-lg sm:text-xl">
              WEB制作で手がけた LP・コーポレートサイト・採用サイトを、作った理由と工夫した点と一緒に残すページです。
            </p>
            <p className="text-muted-foreground text-sm">
              実案件の名前や画像は載せず、練習で作ったものを中心に置いています。
            </p>
          </div>
        </div>
      </section>

      {/* 3つのカード：横3列のタイルではなく、作業の順に縦へ積む */}
      <section id="works" className="bg-primary-pale scroll-mt-4">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-2xl font-bold">やっていること</h2>
          <ol className="mt-12 grid gap-12">
            {cards.map(({ icon: Icon, title, tool, text }, i) => (
              <li key={title}>
                <Card className="relative gap-4 rounded-2xl py-8 shadow-none sm:grid sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] sm:items-center sm:gap-6">
                  {/* 番号はカードの上辺をまたがせて、順番があることを先に見せる */}
                  <span
                    aria-hidden="true"
                    className="border-primary-strong text-primary-strong bg-card absolute -top-4 left-6 inline-flex size-8 items-center justify-center rounded-full border-2 font-mono text-sm font-bold"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {/* アイコンは見出しの横に置く。縦に積むと番号と目印が二重になる */}
                  <CardHeader className="grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-2 pt-2">
                    <span className="bg-primary-pale text-primary-strong row-span-2 inline-flex size-10 items-center justify-center rounded-lg">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription className="font-mono text-xs">
                      {tool}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="sm:pl-0">
                    <p>{text}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}

export default App
