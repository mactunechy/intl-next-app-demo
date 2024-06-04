import TranslationsProvider from "@/providers/translation-provider";
import initTranslations from "../i18n";
import { ClientComponent } from "@/components/client-component";
import LanguageChanger from "@/components/language-changer";

const namespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  // first namspace in the array is the default namespace
  const { t, resources } = await initTranslations(locale, namespaces);

  return (
    <>
      {/*Note this provider is only applied once on every pages level of the next app*/}
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={namespaces}
      >
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-3xl">{t("hero")}</h1>
          <ClientComponent />
          <p>{t("common:body")}</p>
          <LanguageChanger />
        </main>
      </TranslationsProvider>
    </>
  );
}
