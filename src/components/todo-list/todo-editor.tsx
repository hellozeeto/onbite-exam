import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateTodo } from "@/store/todos";

export default function TodoEditor() {
const createTodo = useCreateTodo();
  const [content, setContent] = useState('');
  const handleAddClick = () => {
    if(content.trim() === '') return; // 빈 값이면 추가하지 않음
    createTodo(content);
    setContent(''); // 입력 필드 초기화
  }

  return (
    <div className="flex gap-2">
      <Input value={content} onChange={(e) => setContent(e.target.value)} 
      placeholder="새로운 할일을 추가하세요..." />
      <Button onClick={handleAddClick}>추가</Button>
    </div>
  );
}
