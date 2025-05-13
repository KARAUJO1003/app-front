import prisma from '@/lib/prisma'
import { NextResponse } from "next/server"
import { Meta } from '../../../../../generated/prisma'

// Endpoint para obter detalhes de uma meta específica
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Busca a meta pelo ID
    const meta: Meta | null = await prisma.meta.findUnique({ where: { id } })

    if (!meta) {
      return NextResponse.json({ error: "Meta não encontrada" }, { status: 404 })
    }

    // Busca as parcelas relacionadas a esta meta
    const metaParcelas = await prisma.parcela.findMany({
      where: { metaId: id },
      orderBy: { numero: "asc" },
    })

    // Calcula informações adicionais
    const parcelasPagas = metaParcelas.filter((p) => p.status === "Paga").length
    const valorPago = metaParcelas
      .filter((p) => p.status === "Paga")
      .reduce((total, parcela) => total + (parcela.valorPago || 0), 0)

    return NextResponse.json({
      meta,
      parcelas: metaParcelas,
      resumo: {
        valorPago,
        parcelasPagas,
        progresso: (parcelasPagas / meta.numParcelas) * 100,
      },
    })
  } catch (error) {
    console.error("Erro ao buscar meta:", error)
    return NextResponse.json({ error: "Erro ao processar a solicitação" }, { status: 500 })
  }
}

// Endpoint para atualizar uma meta
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const body = await request.json()

    // Na implementação real, aqui atualizaríamos a meta no banco de dados

    return NextResponse.json({
      message: "Meta atualizada com sucesso",
      id,
    })
  } catch (error) {
    console.error("Erro ao atualizar meta:", error)
    return NextResponse.json({ error: "Erro ao processar a solicitação" }, { status: 500 })
  }
}

// Endpoint para excluir uma meta
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Na implementação real, aqui excluiríamos a meta e suas parcelas do banco de dados

    return NextResponse.json({
      message: "Meta excluída com sucesso",
      id,
    })
  } catch (error) {
    console.error("Erro ao excluir meta:", error)
    return NextResponse.json({ error: "Erro ao processar a solicitação" }, { status: 500 })
  }
}
