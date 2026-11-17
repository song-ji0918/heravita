import { Route } from "@/routes/journey_.booking";
import BookingPage from "./BookingPage";

export default function BookingRoutePage() {
  const { stage, destination, context } = Route.useSearch();
  return (
    <BookingPage
      key={`${stage}-${destination}-${context ?? ""}`}
      initialStage={stage}
      initialDestination={destination}
      consultationContext={context}
    />
  );
}
