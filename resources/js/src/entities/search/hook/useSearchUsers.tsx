import { useEffect, useMemo, useState } from 'react'
import { useSearchStore } from '@/entities/search/model'
import { searchApi } from '@/entities/search/api'
import { HookOptions } from '@/shared/types/HookOptions'

export const useSearchUsers = (options?: HookOptions) => {
    const [query, setQuery] = useState<string>('')
    const results = useSearchStore((state) => state.results)
    const addResult = useSearchStore((state) => state.addResult)
    const [searchTimeout, setSearchTimeout] = useState<ReturnType<typeof setTimeout>>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetch = async (value: string) => {
        if (!options.enabled) {
            clearTimeout(searchTimeout)
            setIsLoading(false)
            setQuery('')
        }

        clearTimeout(searchTimeout)
        setIsLoading(true)
        setQuery(value)

        if (!value.length) {
            setIsLoading(false)
            return
        }

        if (results.find(item => item.query === value)) {
            setIsLoading(false)
            return
        }

        setSearchTimeout(setTimeout(async () => {
            await getUsers(value)
            setIsLoading(false)
        }, 500))
    }

    const getUsers = async (value: string) => {
        const res = await searchApi.searchUsers(value)
        const data = res.data

        if (data.success) {
            addResult(value, data.result)
        }
    }

    const data = useMemo(() => {
        if (!query.length) return []

        const result = results.find(item => item.query === query)

        if (!result) return []

        return result.chats
    }, [query, results])

    useEffect(() => {
        clearTimeout(searchTimeout)
        setIsLoading(false)
        setQuery('')
    }, [options.enabled])

    return {
        data,
        fetch,
        isLoading
    }
}
