import type{ Ref } from 'vue'
import { computed } from 'vue'

export const useCount = () => {

    const count: Ref<number> = useState('count', () => 0)
    const increment = ()=>{
        count.value++
    }
    return {count, increment}
}