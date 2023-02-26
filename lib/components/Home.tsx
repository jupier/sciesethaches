import { Post } from "lib/api";
import Link from "next/link";

export function HomeText() {
  return (
    <div>
      <h1>Bienvenue sur Scies et Haches 👋</h1>
      <p>
        Je vous propose de découvrir ici comment (où au moins je tente de faire
        😄) mon bois de chauffage sans pétrôle. Pas de tronconneuse ou autre
        matériel thermique. Je n&apos;utilise que scies et haches.
      </p>
      <h2>Pourquoi❓</h2>
      <p>
        Vous vous demandez certainement pourquoi je n&apos;utilise pas les
        technologies modernes pour faire mon bois. Voici quelques unes des
        raison:
      </p>
      <ul>
        <li>
          <u>La simplicité:</u> J&apos;aime les choses simples. De mon point de
          vue, une scie et une hache sont des outils simples. Un bon affûtage et
          on est prêt pour faire son bois toute une après midi. De plus une
          tronconneuse demande souvent une attention particulière. C&apos;est un
          outil très dangereux. Malgré son efficacité (que je ne remets
          évidemment pas en cause), je préfère être maître de la lame. En effet,
          stopper le mouvement d&apos;une scie est très simple. Il suffit
          d&apos;arrêter le mouvement de son corp. Alors que la tronconneuse est
          entrainée par son propre moteur. La stopée n&apos;est pas chose
          évidente rassurée avec une scie entre les mains.
        </li>
        <li>
          <u>L&apos;économie:</u> Tout dépend de votre équipement, mais
          l&apos;achat d&apos;une tronconneuse (je parle d&apos;une moodèle de
          qualité) et d&apos;une fendeuse représente une belle dépense. Sans
          parler de l&apos;entretien que cela nécessite, du prix du carburant
          (toujours en hausse) et l&apos;huile.
        </li>
        <li>
          <u>Le côté nature:</u>
          J&apos;ai vécu dans une grande ville pendant plusieurs année. Nous
          avons fait le choix de revenir à la campagne pour retrouver le goût à
          la nature et le respect de la nature. En faisant son bois à la main,
          je trouve qu&apos;on se rend compte de ce que représente un arbre, le
          temps qu&apos;il a fallut pour qu&apos;il pousse, le réconfort
          qu&apos;il va nous apporter. Ce que j&apos;aime particulièrement à la
          campagne c&apos;est aussi le calme qui y règne. Se retrouver en forêt
          à faire son bois est une sensation particulière et après une bonne
          après midi on se sent resourcée et on sait qu&apos;on va passer une
          bonne nuit de sommeil.
        </li>
        <li>
          <u>Prendre son temps:</u>
          J&apos;entends souvent les gens me dire: &apos;Tu vas te faire
          chier&apos;, &apos;Ca va te prendre un temps fou&apos;. J&apos;ai
          personnellement pris l&apos;option de prendre mon temps et de faire
          mon bois petit à petit. Je travaille toute la semaine (dans un
          bureau), arrivée le weekend je prends une ou deux après midi pour
          faire mon bois. J&apos;y vais tranquillement. Je n&apos;ai pas
          d&apos;objectif particulier.En tout cas, ça avance et c&apos;est le
          principal.
        </li>
        <li>
          <u>Le sport:</u>
        </li>
      </ul>
      <h2>Disclaimer ⚠️</h2>
      <p>
        Je ne suis pas un professionnel. Mes différents conseils sont donc à
        prendre avec des pincettes. Certaines de mes méthodes ne sont pas les
        plus efficientes. Je suis donc preneur de vos conseils (s&apos;ils vont
        dans le sens de mes valeurs). J&apos;essaie constamment d&apos;améliorer
        mes différents procédés, mais dans un soucis de simplicité et
        d&apos;économie, je souhaite qu&apos;elles restent simples.
      </p>
    </div>
  );
}

type HomePostsProps = {
  posts: Post[];
};

export function HomePosts({ posts }: HomePostsProps) {
  return (
    <div className="grid">
      {posts.map((post) => (
        <div key={post.link} className="g-col-6">
          <div className="card">
            <img src="/first.jpg" className="card-img-top"></img>
            <div className="card-body">
              <Link
                className="stretched-link"
                href={`/post/${encodeURIComponent(post.link)}`}
              >
                {post.link}
              </Link>
              <h2>From: {post.author}</h2>
              <div>{post.resume}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
