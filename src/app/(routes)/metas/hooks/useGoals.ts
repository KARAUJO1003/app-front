import { toast } from "sonner";
import { useRouter } from "next/navigation";
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
