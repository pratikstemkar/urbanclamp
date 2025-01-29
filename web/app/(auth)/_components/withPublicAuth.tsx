import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function withPublicAuth<T extends React.ComponentType<any>>(
    WrappedComponent: T
) {
    const PublicPage = (props: React.ComponentProps<T>) => {
        const [loading, setLoading] = useState(true);
        const router = useRouter();
        const jwtToken = localStorage.getItem("access_token");

        useEffect(() => {
            if (jwtToken) {
                router.push("/homes");
            } else {
                setLoading(false);
            }
        }, [router, jwtToken]);

        if (loading) {
            return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    };

    return PublicPage;
}
