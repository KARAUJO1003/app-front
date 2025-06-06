"use client";
import { Button } from "@/components/ui/button";
import { useDeleteGoalMutate } from "../hooks/useGoals";

export const DeleteGoalButton = ({ goalId }: { goalId: string }) => {
  const { mutateAsync: deleteGoal } = useDeleteGoalMutate();
  return (
    <Button
      variant="destructive"
      onClick={() => {
        deleteGoal(goalId);
      }}
    >
      Deletar Meta
    </Button>
  );
};
