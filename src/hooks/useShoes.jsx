import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useShoes = () => {
    const axiosPublic = useAxiosPublic();

    // The useQuery hook is used to fetch shoes data
    const { data: shoes = [], isPending: loading, refetch } = useQuery({
        queryKey: ['shoes'],  // An identifier for the query
        queryFn: async () => {
            // Axios is used to make a GET request to fetch shoes data
            const res = await axiosPublic.get('/shoes');
            return res.data;
        }
    })

    // The hook returns an array with shoes data, loading state, and a refetch function
    return [shoes, loading, refetch]
}

export default useShoes