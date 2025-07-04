import { LoadingSpinner } from '@/components/ui/loadingSpinner';
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className='h-screen flex items-center justify-center'>
            <LoadingSpinner/>
        </div>)
}