import { Routes, Route } from "react-router-dom";
import First from "../Main/first_main/first";
import Setting from "../Main/settingPage/Setting";
import AddGoal from "../Main/make_goal_pages/AddGoal";
import AccountSelector from "../Main/make_goal_pages/make_ai_goal/AccountSelector";
import AccountSelector1 from "../Main/make_goal_pages/make_self/AccountSelector1";
import Pig from "../Main/make_goal_pages/make_ai_goal/ai_first";
import List from "../Main/make_goal_pages/make_ai_goal/list";
import Choose from "../Main/make_goal_pages/make_self/choose";
import Choice from "../Main/make_goal_pages/make_self/choice";
import Rocket from "../Main/make_goal_pages/rocket";
import ViewGoals from "../Main/view_goals_pages/ViewGoals";
import Goal from "../Main/view_goals_pages/goal";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/add-goal" element={<AddGoal />} />
      <Route path="/main/account-selector" element={<AccountSelector />} />
      <Route path="/main/account-selector1" element={<AccountSelector1 />} />
      <Route path="/main/pig" element={<Pig />} />
      <Route path="/main/choose" element={<Choose />} />
      <Route path="/main/list" element={<List />} />
      <Route path="/main/choice" element={<Choice />} />
      <Route path="/main/rocket" element={<Rocket />} />
      <Route path="/main/goals" element={<ViewGoals />} />
      <Route path="/main/goal" element={<Goal />} />
    </Routes>
  );
};

export default MainRoutes;
