import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FlagIcon } from "lucide-react";

const ReportDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="border rounded-full p-2 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900">
                    <FlagIcon className="h-5 w-5" />
                </div>
            </DialogTrigger>
            <DialogContent className="w-11/12 rounded-lg">
                <DialogHeader>
                    <DialogTitle>Report Partner</DialogTitle>
                </DialogHeader>
                <div>Hehe</div>
            </DialogContent>
        </Dialog>
    );
};

export default ReportDialog;
