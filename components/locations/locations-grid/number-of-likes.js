import { useLikes } from "@/context/likes"

export default function NumberOfLikes() {
    const { likes } = useLikes();
    
    return (
        <span>({likes} likes)</span>
    )
}