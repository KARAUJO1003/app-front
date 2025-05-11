import Link from "next/link"
import { Target } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
        <Target className="h-6 w-6" />
        <span>MetaShare</span>
      </Link>
    </div>
  )
}
