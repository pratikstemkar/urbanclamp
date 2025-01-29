import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function withAuth<T extends React.ComponentType<any>>(
    WrappedComponent: T
) {
    const ProtectedPage = (props: React.ComponentProps<T>) => {
        const [loading, setLoading] = useState(true);
        const router = useRouter();
        const jwtToken = localStorage.getItem("access_token");

        useEffect(() => {
            if (!jwtToken) {
                router.push("/signin");
            } else {
                setLoading(false);
            }
        }, [router, jwtToken]);

        if (loading) {
            return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    };

    return ProtectedPage;
}
