
'use client'

// This page is now obsolete as the link structure has been changed to 
// /tests/[examType]/maths/[chapter]/test
// The logic is moved to src/app/tests/[examType]/maths/[chapter]/test/page.tsx
// To avoid breaking anything, we just redirect.

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RedirectPage() {
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        const { examType, chapter } = params;
        if (examType && chapter) {
            router.replace(`/tests/${examType}/maths/${chapter}/test`);
        } else {
            router.replace('/');
        }
    }, [params, router]);

    return null;
}
