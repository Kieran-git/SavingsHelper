import { DarkTheme, LightTheme } from '@/constants/themes';
import { useState } from 'react';
import MainScreen from '@/components/Screens/MainScreen';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const theme = isDark ? DarkTheme : LightTheme;

  return (
    <MainScreen 
      theme={theme} 
      isDark={isDark}
      onToggleTheme={() => setIsDark((prev) => !prev)}
    />
  );
}
