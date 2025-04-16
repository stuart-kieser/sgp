'use server'

import { redirect } from 'next/navigation'

export default async function Store() {
    // nav to under construction page
    redirect(`/uc`)
}