import { useEffect } from 'react';
import toast, { useToasterStore } from 'react-hot-toast';

const useLimitToasts = () => {
    const { toasts } = useToasterStore();

    const TOAST_LIMIT = 2
  
    // Enforce Limit
    useEffect(() => {
      toasts
        .filter(t => t.visible) // Only consider visible toasts
        .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
        .forEach(t => toast.dismiss(t.id)) // Dismiss – Use toast.remove(t.id) removal without animation
    }, [toasts]);

}

export default useLimitToasts;