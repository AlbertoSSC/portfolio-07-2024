import { HomeComponent } from '@/scenes';
import { LanguageProvider } from './core/language.context';

function App() {
  return (
    <>
      <LanguageProvider>
        <HomeComponent />
      </LanguageProvider>
    </>
  );
}

export default App;
