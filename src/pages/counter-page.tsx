import { useCountStore } from "../store/count";
import { Button } from "@/components/ui/button";
export default function CounterPage() {
  const { count, increase, decrease } = useCountStore();
  return (
    <div>
      <h1 className="text-2xl font-bold">CounterPage</h1>
      <div>{count}</div>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </div>
  );
}