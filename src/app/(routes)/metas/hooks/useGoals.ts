import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axions-instance";
import { useMutation } from "@tanstack/react-query";

export const useDeleteGoalMutate = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (goalId: string) => {
      const response = await fetch(`/api/metas/${goalId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete goal");
      }
      return response.json();
    },
    onSuccess: (data) => {
      console.log("Goal deleted successfully:", data);
      toast.success("Meta excluída com sucesso!");
      router.push("/metas");
    },
    onError: (error) => {
      toast.error("Erro ao excluir meta: " + error.message);
      console.error("Error deleting goal:", error);
    },
  });
};

export const useMarkAsPaidMutate = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (parcela: { id: string; valorPago: number }) => {
      const response = await api.patch(`/parcelas/${parcela.id}`, {
        valorPago: parcela.valorPago,
      });
      if (response.status !== 200) {
        throw new Error("Failed to mark as paid");
      }
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Parcela marcada como paga:", data);
      toast.success("Parcela marcada como paga com sucesso!");
      router.refresh();
    },
    onError: (error) => {
      toast.error("Erro ao marcar parcela como paga: " + error.message);
      console.error("Error marking parcel as paid:", error);
    },
  });
};
