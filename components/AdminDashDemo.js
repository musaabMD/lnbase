import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Activity,
  Users,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Settings,
  CreditCard,
  Globe,
  LayoutDashboard,
  Bell,
  LogOut,
  ChevronDown,
  Search,
  Download
} from 'lucide-react';

const ExamProDashboard = () => {
  const stats = {
    totalUsers: '15,234',
    activeSubscriptions: '8,642',
    totalExams: '456',
    totalQuestions: '24,789',
    feedback: '4,129',
    activeSites: '12',
    revenue: '$89,432.54',
    growthRate: '+22.4%'
  };

  const recentActivity = [
    { user: 'Sarah Chen', action: 'Completed exam', exam: 'AWS Solutions Architect', score: '92%' },
    { user: 'Michael Park', action: 'Started subscription', plan: 'Professional Plan', time: '2 hours ago' },
    { user: 'Emma Wilson', action: 'Submitted feedback', rating: '5 stars', time: '3 hours ago' },
    { user: 'James Rodriguez', action: 'Created new exam', title: 'Azure Fundamentals', time: '5 hours ago' }
  ];

  const performanceData = [
    { label: 'Users Growth', value: 82 },
    { label: 'Completion Rate', value: 78 },
    { label: 'Satisfaction', value: 94 },
    { label: 'Revenue Target', value: 88 }
  ];

  return (
    <div className="min-h-screen bg-gray-50/90">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-xl font-bold">ExamPro</h1>
          <Badge variant="secondary" className="ml-2">Admin</Badge>
        </div>
        
        <nav className="space-y-1 p-4">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Users className="h-4 w-4" /> Users
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <BookOpen className="h-4 w-4" /> Exams
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <HelpCircle className="h-4 w-4" /> Questions
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <CreditCard className="h-4 w-4" /> Subscriptions
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Globe className="h-4 w-4" /> Sites
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <MessageSquare className="h-4 w-4" /> Feedback
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-4 w-4" /> Settings
          </Button>
        </nav>

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <div className="flex items-center gap-2 rounded-lg border p-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@exampro.co</p>
            </div>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-6">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">Dashboard Overview</h2>
          </div>
          <div className="flex items-center gap-4">
            <Input 
              placeholder="Search..." 
              className="w-64"
            />
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" /> Export Data
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalUsers}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.growthRate} from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeSubscriptions}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  +12.3% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Questions</CardTitle>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalQuestions}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  +842 this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.revenue}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  +18.4% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {performanceData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.label}</span>
                        <span className="font-medium">{item.value}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary">
                        <div 
                          className="h-2 rounded-full bg-primary" 
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates across the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {activity.user.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{activity.user}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.action} {activity.exam || activity.plan || activity.rating || activity.title}
                        </p>
                      </div>
                      {activity.score && (
                        <Badge variant="secondary">{activity.score}</Badge>
                      )}
                      {activity.time && (
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Stats */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Exam Statistics</CardTitle>
                <CardDescription>Total exams: {stats.totalExams}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Completion Rate</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Average Score</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Active Exams</span>
                    <span className="text-sm font-medium">234</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Site Usage</CardTitle>
                <CardDescription>Active sites: {stats.activeSites}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Total Traffic</span>
                    <span className="text-sm font-medium">1.2M visits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Avg. Session</span>
                    <span className="text-sm font-medium">24 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Active Users</span>
                    <span className="text-sm font-medium">3.4k</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feedback Overview</CardTitle>
                <CardDescription>Total feedback: {stats.feedback}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Average Rating</span>
                    <span className="text-sm font-medium">4.8/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Response Rate</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">New This Week</span>
                    <span className="text-sm font-medium">234</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamProDashboard;