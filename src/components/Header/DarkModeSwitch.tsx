import { Switch } from '@mui/material';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { toggleDarkMode } from 'store/slices/dark-mode/dark-mode';
import DarkModeIcon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function DarkModeSwitch() {
  const isDarkModeEnabled = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <>
      {isDarkModeEnabled ? <DarkModeIcon /> : <WbSunnyIcon />}
      <Switch color="default" checked={isDarkModeEnabled} onChange={onChangeDarkMode} />
    </>
  );
}
export default DarkModeSwitch;
