import reset from "@/assets/journey-reset.jpg";
import rebuild from "@/assets/journey-rebuild.jpg";
import flourish from "@/assets/journey-flourish.jpg";
import medicine from "@/assets/journey-medicine.jpg";
import connection from "@/assets/journey-connection.jpg";
import breath from "@/assets/journey-breath.jpg";
import kitchen from "@/assets/journey-kitchen.jpg";
import care from "@/assets/journey-care.jpg";
import spa from "@/assets/journey-spa.jpg";
import rebuildMedicine from "@/assets/rebuild-genomics.jpg";
import rebuildConnection from "@/assets/rebuild-relationship.jpg";
import rebuildEnergy from "@/assets/rebuild-energy.jpg";
import rebuildLifestyle from "@/assets/rebuild-lifestyle.jpg";
import flourishMedicine from "@/assets/flourish-medicine.jpg";
import flourishConnection from "@/assets/flourish-relationship.jpg";
import flourishEnergy from "@/assets/flourish-energy.jpg";
import flourishLifestyle from "@/assets/flourish-lifestyle.jpg";
import resetDays from "@/assets/reset-days.jpg";
import rebuildDays from "@/assets/rebuild-days.jpg";
import flourishDays from "@/assets/flourish-days.jpg";
import rebuildCare from "@/assets/rebuild-care.jpg";
import flourishCare from "@/assets/flourish-care.jpg";
import rebuildSpa from "@/assets/rebuild-spa.jpg";
import expansion from "@/assets/flourish-expansion.jpg";
export const media = { reset, rebuild, flourish, medicine, connection, breath, kitchen, care, spa };
export const stageMedia = {
 reset: {hero:reset, medicine, connection, energy:breath, lifestyle:kitchen, care, spa, days:resetDays},
 rebuild: {hero:rebuild, medicine:rebuildMedicine, connection:rebuildConnection, energy:rebuildEnergy, lifestyle:rebuildLifestyle, care:rebuildCare, spa:rebuildSpa, days:rebuildDays},
 flourish: {hero:flourish, medicine:flourishMedicine, connection:flourishConnection, energy:flourishEnergy, lifestyle:flourishLifestyle, care:flourishCare, spa:expansion, days:flourishDays},
};
export const expansionMedia = expansion;