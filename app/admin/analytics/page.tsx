import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart as BarChartIcon, TrendingUp } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
                    <p className="text-muted-foreground">
                        Overview of your blog performance.
                    </p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Page Views (Last 7 Days)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] flex items-end justify-between gap-2 p-4 border-b">
                            {[45, 60, 75, 50, 80, 95, 85].map((value, i) => (
                                <div key={i} className="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-md relative group" style={{ height: `${value}%` }}>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {value * 10} views
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-muted-foreground px-2">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Top Referrers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { name: "Google", count: 1250, percent: 45 },
                                { name: "Twitter / X", count: 850, percent: 30 },
                                { name: "Direct", count: 420, percent: 15 },
                                { name: "GitHub", count: 280, percent: 10 },
                            ].map((item) => (
                                <div key={item.name} className="flex items-center">
                                    <div className="w-24 font-medium text-sm">{item.name}</div>
                                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden mx-4">
                                        <div className="h-full bg-primary" style={{ width: `${item.percent}%` }} />
                                    </div>
                                    <div className="w-12 text-right text-sm text-muted-foreground">{item.percent}%</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
