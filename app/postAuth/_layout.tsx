import React from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import ScheduleViewer from "app/postAuth/ScheduleViewer";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ScheduleViewer/>
    </ApplicationProvider>
  );



  
}