import Home from "../PortfolioContainer/Home/Home";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  }
]

export const GER_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1
}