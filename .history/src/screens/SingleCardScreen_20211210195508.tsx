import React from 'react'
import { useParams } from 'react-router'
import { chapters } from '../utils/quranChapters'

export const   SingleCard =  () => {
    const slug = useParams()
    return (
        <div>
            {chapters.find((c) => slug ===  )}
        </div>
    )
}
