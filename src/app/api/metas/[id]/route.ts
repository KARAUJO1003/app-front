import { NextResponse } from "next/server"

// Simulação de banco de dados em memória (mesmos tipos do arquivo route.ts principal)
// Na implementação real, esses dados viriam de um banco de dados

// Dados de exemplo para simulação
const metasExemplo = [
  {
    id: "meta_1",
    titulo: "Viagem de Férias",
    descricao: "Viagem para a praia no final do ano",
    categoria: "viagem",
    valorTotal: 6000,
    valorParcela: 500,
    numParcelas: 12,
    recorrente: true,
    frequencia: "mensal",
    diaVencimento: 10,
    dataInicio: "2025-01-10",
    numExecucoes: 12,
    usuarioCriador: "usuario1",
    participantes: ["usuario1", "usuario2"],
    dataCriacao: "2024-12-15T10:30:00Z",
  },
]

const parcelasExemplo = Array.from({ length: 12 }, (_, i) => {
  const dataVencimento = new Date("2025-01-10")
  dataVencimento.setMonth(dataVencimento.getMonth() + i)

  return {
    id: `parcela_${i + 1}`,
    metaId: "meta_1",
    numero: i + 1,
    valor: 500,
    dataVencimento: dataVencimento.toISOString().split("T")[0],
    status: i < 3 ? "Paga" : "Pendente",
    valorPago: i < 3 ? 500 : null,
    responsavel: i % 3 === 0 ? "ambos" : i % 3 === 1 ? "usuario1" : "usuario2",
    dataPagamento: i < 3 ? "2025-0" + (i + 1) + "-08" : null,
  }
})

// Endpoint para obter detalhes de uma meta específica
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    // Busca a meta pelo ID
    const meta = metasExemplo.find((m) => m.id === id || m.id === `meta_${id}`)

    if (!meta) {
      return NextResponse.json({ error: "Meta não encontrada" }, { status: 404 })
    }

    // Busca as parcelas relacionadas a esta meta
    const metaParcelas = parcelasExemplo.filter((p) => p.metaId === meta.id)

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
