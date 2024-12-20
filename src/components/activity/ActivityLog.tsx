import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ActivityItem } from "./ActivityItem";
import { recentActivities } from "../../data/activityData";
import { History } from "lucide-react";

export const ActivityLog: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
