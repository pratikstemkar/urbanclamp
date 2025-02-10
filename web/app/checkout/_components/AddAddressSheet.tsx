import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MapPinPlusIcon } from "lucide-react";
import NewAddressForm from "./NewAddressForm";
import { ScrollArea } from "@/components/ui/scroll-area";

const AddAddressSheet = (props: { refetchAddresses: any }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Card className="text-start border-dashed border-2 shadow-none hover:shadow-md hover:cursor-pointer">
                    <CardContent className="flex space-x-5 mt-6">
                        <div>
                            <MapPinPlusIcon />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h1 className="font-bold tracking-tighter">
                                Add New Address
                            </h1>
                            <div className="text-muted-foreground">
                                Add a well decripted address. This helps our
                                service partners to easily navigate and reach at
                                service home on time.
                            </div>
                            <Button>Add New</Button>
                        </div>
                    </CardContent>
                </Card>
            </SheetTrigger>
            <SheetContent side="left">
                <ScrollArea className="h-full">
                    <SheetHeader>
                        <SheetTitle>Add new address</SheetTitle>
                    </SheetHeader>
                    <NewAddressForm refetchAddresses={props.refetchAddresses} />
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};

export default AddAddressSheet;
