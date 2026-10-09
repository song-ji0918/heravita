import { Route } from "@/routes/journey_.booking";
import BookingPage from "./BookingPage";
export default function BookingRoutePage(){const {stage,destination}=Route.useSearch();return <BookingPage key={`${stage}-${destination}`} initialStage={stage} initialDestination={destination}/>;}