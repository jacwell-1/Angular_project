# DocumentManager

### Contexte du projet

Le projet Document Manager est une application Angular conçue pour organiser des documents par catégorie. Le but était de construire l’app en utilisant les standalone components Angular, avec une structure simple composée de 3 composants :

`AppComponent` : composant principal qui sert de conteneur et de routeur.

`DocumentListComponent` : affiche la liste des documents.

`DocumentDetailComponent` : affiche les détails d’un document sélectionné.

#### Commande initiale pour créer un projet Angular standalone :

```bash
ng new document-manager --standalone --routing --style=css
```

#### Ajout des composants nécessaires via Angular CLI (standalone) :

```bash
ng generate component document-list --standalone
ng generate component document-detail --standalone
```

### Architecture des fichiers et scripts Angular

`app.component.ts` et `app.component.html`

Emplacement :

`src/app/app.component.ts et src/app/app.component.html`

Rôle :

C’est le composant racine qui initialise l’application.
Il contient le routeur Angular (`RouterOutlet`) pour afficher soit la liste des documents soit le détail selon la route choisie.

Fonctionnement :

Le template HTML utilise l’interpolation pour afficher des titres.

Il utilise les directives de routage pour naviguer entre composants.

La logique TypeScript gère la navigation principale.

`document-list.component.ts` et `document-list.component.html`

Emplacement :

`src/app/document-list/document-list.component.ts et .html`

Rôle :

Afficher tous les documents sous forme de liste, filtrables par catégorie, triables, etc.

Fonctionnalités clés :

Utilisation de `*ngFor` pour parcourir la liste des documents.

Utilisation de `@Output()` et EventEmitter pour informer le parent (`app`) lorsqu’un document est sélectionné.

Binding (property et event) pour la sélection et l’affichage dynamique.

Pipes pour formatter les dates ou filtrer les données.



`document-detail.component.ts` et `document-detail.component.html`

Emplacement :

`src/app/document-detail/document-detail.component.ts et .html`

Rôle :

Afficher les informations détaillées d’un document sélectionné (nom, type, catégorie, tags, description, lien).

Fonctionnalités clés :

Reçoit le document sélectionné via `@Input()` depuis le parent.

Affiche conditionnellement des sections via `*ngIf`.

Utilise `ngClass` pour appliquer des styles selon le type de document.

Gère des événements utilisateur (bouton retour, téléchargement).

### Interfaces TypeScript

Fichier : `src/app/document-manager.interface.ts`

Description :

Contient l’interface `Document` qui structure les données documentaires utilisées partout :


```bash
export interface Document {
  id: number;
  name: string;
  type: 'pdf' | 'doc' | 'image' | 'other';
  category: string;
  dateAdded: Date;
  tags: string[];
  url: string;
  description?: string;
}
```


### Services Angular

Fichier : `src/app/services/document.service.ts`

Rôle :

Centraliser la gestion des documents (récupération, ajout, suppression).
Ce service fournit une API simple aux composants.

Fonctionnement :

Utilise un tableau local de documents (mock data).

Méthodes pour récupérer la liste complète, récupérer par id, ajouter ou supprimer.

Le service est injecté via `@Injectable({ providedIn: 'root' })`.


### Routes Angular

Fichier : `src/app/app-routing.module.ts` ou `config` dans `app.component.ts` si standalone routing

Rôle :

Gérer la navigation entre la liste et le détail d’un document via l’URL.

Exemple de routes :

```bash
const routes: Routes = [
  { path: '', component: DocumentListComponent },
  { path: 'document/:id', component: DocumentDetailComponent },
  { path: '**', redirectTo: '' }
];
```