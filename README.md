# angular-iut-montreuil
## Introduction
Angular est un des trois framework/librairies récentes utilisés pour faire du développement front end, avec React.JS et Vue.JS.
Angular est un framework très opinionated, c'est à dire qu'il impose une façon de faire. Son principal concurrent, React.JS, est une librairie qui ne fait que le View de "MVC", et est à combiner à d'autres librairies pour obtenir un framework complet. Le troisième concurrent Vue.js est apparemment plus simple à apprendre mais n'a pas une aussi grande communauté que les deux premiers.
Petite comparaison de la popularité des trois frameworks:
https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190

Plus de lecture :
1. Angular https://angular.io/docs
2. React https://reactjs.org/docs/getting-started.html
3. Vue https://vuejs.org/v2/guide/

## -1 Prérequis
### Sur votre ordi perso:
Si vous utilisez l'ordi de l'iut vous pouvez passer ce step.
1. Installer git https://git-scm.com/downloads
2. Installer node.js https://nodejs.org/en/download/
3. Avoir Chrome/Chromium d'installé https://www.google.com/intl/fr_fr/chrome/
4. Je vous conseille très fortement d'installer le super éditeur de texte VSCODE https://code.visualstudio.com/download
5. Installer l'extension de Vscode Angular Service: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template

### Sur un pc de l'iut
1. Télécharger Chromium ici https://download-chromium.appspot.com/
2. Je vous conseille très fortement d'installer le super éditeur de texte VSCODE https://code.visualstudio.com/docs/?dv=linux64
3. Installer l'extension de Vscode Angular Service: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template


## 0° Installation du squelette de l'application
Exécuter ces commandes
```
git clone https://github.com/testos944/angular-iut-montreuil.git
cd angular-iut-montreuil
npm install
```

Lancer l'application !

```npm run start```

Allez à http://localhost:4200 et voyez le début de super application web que vous allez développper !

## Explication sur la notation

1. Le code doit être en anglais uniquement, bien indenté (ctrl-k ctrl-f avec VSCODE), sinon prévoir des malus
2. Chacun sera noté sur sa réalisation lors de la dernière séance, je passerai 10 minutes avec chaque personne. L'explication du travail réalisé est aussi importante que la réalisation.
3. Idéalement l'application ne doit pas avoir (trop) de bug :-)
4. On peut s'aider les uns les autres mais si on copie: 0 à tous.

## Ressources utiles pour le développement

1. La doc d'angular https://angular.io/docs
2. Pour tout ce qui est design, la doc d'angular material https://material.angular.io/components/categories
3. La doc de flexbox en css https://www.w3schools.com/css/css3_flexbox.asp
4. Pour tout le reste, https://www.google.com/ et on prend les résultats de stackoverflow !

## Partie A, gestion des employés

### 1° Virer un employé
En tant qu'entreprise américaine, il nous est possible de virer les employés du jour au lendemain. C'est ce que nous allons faire !

Sur http://localhost:4200/employees, on a une liste d'employés et un bouton "poubelle" qui ne fait rien. Branchez le à la suppression des employés.

### 2° Virer un employé - avec une confirmation
Une RH a laissé son chat marcher sur son clavier et a viré John sans faire exprès ! Elle aimerait avoir un dialogue de confirmation à la suppression d'un employé.

Vous allez devoir utiliser le Snackbar d'Angular Material: https://material.angular.io/components/snack-bar/overview
Note: le snackbar doit disparaître tout seul après 3 secondes.

### 3° Ajouter un style différent

On a recruté une nouvelle RH qui est très myope. Elle a besoin de distinguer les différentes lignes des employés.

> Indice: Pour récupérer l'index d'une directive ngFor, on fait comme ceci:
```
<element *ngFor="let item of items; let i = index;"></element>
```

> Indice2: Vous allez utiliser l'attribut ngClass, cf https://angular.io/api/common/NgClass

Aide en css: créer une classe de style:
```
.is-odd {
  background-color: lightgray;
}
```

### 4° Ajouter une transition

Aujourd'hui quand on supprime un employé, c'est tout de même un peu rapide. Notre RH veut quand même que les employés ne se sentes pas trop froissés quand ils sont virés. On va donc ralentir tout ça et rajouter un peu d'animation dans notre entreprise !

La doc : https://angular.io/guide/animations (tout est dans la doc!!)

> Indice 1: vous aurez besoin de ces imports
```
import { trigger, state, style, transition, animate } from '@angular/animations';
```
> Indice 2: Vous devez garder l'état de l'employé dans un objet situé dans le composant employee-list-component.ts.
```
employeStatus = {};
```

> Indice 3: Vous aurez certainement besoin de la méthode animEnd, pour ne pas recharger la liste des employés tant que l'animation n'est pas terminée.

Si vous avez fini, vous pouvez éxpérimenter sur les transitions le CSS la meilleure façon de faire partir l'employé !
```
  backgroundColor (pour changer la couleur)
  display (faire disparaître completement ?),
  opacity: (le rentre transparent),
  width: (le faire rétrécir!)
```

Par exemple chez moi ça donne ça : ![](gifs/transition.gif)


## Partie B, Ajout d'un employé

### 1° Ajouter un nouvel onglet dans notre application.

On veut créer une page pour ajouter un employé. Vous allez:

1. Créer un nouveau composant, avec la commande ```npm run ng g component employee-create```
> On fait appel au tool Angular CLI qui va faire du scaffolding, c'est à dire créer un truc vide.

Normalement ça a fonctionné et vous devez voir un nouveau dossier `src/app/employee-create`

2. Brancher ce composant dans une nouvelle "route". C'est ce qui permet à Angular de faire correspondre l'URL au composant à charger. Cela se passe dans le fichier `app.routing.ts`. Je vous laisse vous en inspirer, on va par exemple brancher à l'url /new-employee

3. OK si ça marche vous devez pouvoir naviguer à http://localhost:4200/new-employee. Mais c'est pas terrible, je veux avoir un menu qui pointe sur cette URL. Cela se passe dans le composant navigation. Je vous laisse chercher. Vous pouvez choisir l'icone qui vous plait à https://material.io/resources/icons/?style=baseline

4. Maintenant il va falloir ajouter des choses à ce composant. On va utiliser les Template Driven Forms de Angular: https://angular.io/guide/forms. (C'est la façon la plus facile de faire des formulaires, mais aussi la moins customisable...).

> Il faut ajouter les modules qu'on importe à `app.module.ts`:

```
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

  imports: [
    [...]
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
```

> Ensuite on va créer ce qu'on appelle un model (comme le M de MVC), dans le nouveau composant:
```
  // variable privée : model de type Employee
  model: Employee;
  constructor () {
    // ne pas oublier de l'initialiser dans le constructor du composant !
  }
```

> Il faut ensuite avoir un formulaire dans le template du composant:

```
<form (ngSubmit)="onSubmit()" #employeeForm="ngForm">
  <button mat-raised-button color="primary" type="submit">Submit</button>
</form>
```

> Ne pas oublier de définir la fonction onSubmit() (pour l'instant juste un console.log(this.model));

> Ensuite on peut ajouter l'input suivant (à l'intérieur de l'élément form) qui permettra de binder le nom du formulaire au modele du composant:

```
<input type="text" id="name"
       [(ngModel)]="model.name" name="name"
       #name="ngModel">
```
Après choisissez le composant qu'il vous plait pour saisir le nom, c'est par ici : https://material.angular.io/components/form-field/overview

>> [(ngModel)] est la notation qui permet d'avoir un dual binding, c'est à dire que si on change model.name il sera changé dans le template, et vice versa, si on change l'input du template il changera la valeur du modele.

5. Vous devez maintenant avoir au moins un champ qui fonctionne et quand on clique sur Submit, on voit que le nouveau employé est affiché dans la console de developpeur. Maintenant ajoutez tous les champs de l'employé.

6. On va brancher l'ajout de l'employé pour qu'il aille dans notre "base de donnée".

> Ajoutez la méthode suivante a `employee.service.ts`, et codez là !
```
  addEmployee(employee: Employee){
    // Todo !
    // pour bien faire il faut donner un id à l'employé (max id + 1 par exemple), sinon il ne pourra pas être supprimé
  }
```

> Pour tester si ça marche, vous pouvez ajouter l'employé et naviguer dans list employees (attention à ne pas recharger la page)

7. Validation du formulaire

On ne veut pas permettre la création d'employés invalides.
Il faut rendre obligatoire nom et prénom, avec une taille minimale de 4 caractères.
On veut aussi rendre obligatoire l'email et forcer le type email.
Le bouton submit ne doit être clickable uniquement si le formulaire est valide.

> Doc ici : https://angular.io/guide/form-validation et là https://material.angular.io/components/form-field/overview

8. Saisie de la date de naissance

La date de naissance doit utiliser le composant datepicker de angular material : https://material.angular.io/components/datepicker/overview. Il faut que la saisie d'une date de naissance après 2000 ne soit pas possible !

9. Ajout d'un auto complete pour le champ Ville

Les RH en ont marre de toujours taper les noms des villes en entier. Vous devez permettre une pré saisie (autocomplete) pour que les villes déjà saisies apparaissent dans la selection. La doc: https://material.angular.io/components/autocomplete/overview

> Attention on utilise des template driven forms, il faut s'inspirer de ce post pour faire fonctionner: https://stackoverflow.com/questions/48503582/using-angular-material-mat-autocomplete-without-reactiveform

> Vous aurez besoin de la liste des villes disponibles a partir des employés:

```
ngOnInit() {
    this.filteredOptions = this.service.getEmployees()
      .pipe(
        map(employees => employees.map(e => e.city))
      );
  }
```

> Vous aurez aussi besoin de la fonction `(ngModelChange)` à utiliser sur l'input de l'auto complete pour rafraichir la liste des options à chaque fois que l'utilisateur saisit un caractère de plus...

10. Pouvoir éditer un employé

On a envie de pouvoir changer l'email, la ville d'un employé. On va pouvoir réutiliser le composant employee-create avec une route qui prend en paramètre l'id de l'employé. L'url sera la suivante: `employees/:id`.

Il faut aussi ajouter un bouton sur la liste des employés qui nous fasse aller directement à l'édition d'un employé.

> La doc est ici https://angular.io/guide/router#route-parameters

11. Mini refacto. On a un composant qui fait trop de choses. employee-create est a la fois utilisé pour éditer et pour créer un nouvel employé.

- Vous allez créer deux nouveaux composants : employee-form et employee-edit.
- employee-form sera réutilisé par employee-create et employee edit
- employee-form prend en paramètre un employee
- employee-create s'occupe d'initialiser un employee vide
- employee-edit s'occupe de récupérer l'employee via l'id passé en paramètre
- employee-create et employee-edit sont toujours les composants utilisés dans les routes

> C'est la base de l'architecture des composants, employee-form est un dumb component, c'est à dire passif. Il n'a pas à savoir comment les données lui sont passées. Les deux autres composants sont des smart components, qui ne font que retrouver la donnée, mais ils ne s'occupent pas du côté présentation (c'est le dumb component qui s'en occupe).