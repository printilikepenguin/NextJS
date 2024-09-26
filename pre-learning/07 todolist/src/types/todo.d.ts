type TodoType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

type TodoAction =
  | {
      // type: string; // 구체화해주면 편함
      type: "add";
      payload: string;
    }
  | { type: "toggle"; payload: string }
  | { type: "remove"; payload: string };
