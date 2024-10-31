import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MapPinPlusIcon } from "lucide-react";
import NewAddressForm from "./NewAddressForm";
import { ScrollArea } from "@/components/ui/scroll-area";

const AddAddressSheet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Card className="text-start border-dashed border-2 shadow-none hover:shadow-md hover:cursor-pointer lg:h-64">
                    <CardContent className="flex space-x-5 mt-6">
                        <div>
                            <MapPinPlusIcon />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h1 className="font-bold tracking-tighter">
                                Add New Address
                            </h1>
                            <p className="text-muted-foreground">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Cumque repellat vel suscipit
                                harum natus assumenda, quasi, eligendi minus
                                provident nam laboriosam tenetur dolor hic vitae
                                omnis, nemo dicta enim? Necessitatibus.
                            </p>
                            <Button>Add New</Button>
                        </div>
                    </CardContent>
                </Card>
            </SheetTrigger>
            <SheetContent side="left">
                <ScrollArea className="h-full">
                    <SheetHeader>
                        <SheetTitle>Add address</SheetTitle>
                    </SheetHeader>
                    <NewAddressForm />
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};

export default AddAddressSheet;
