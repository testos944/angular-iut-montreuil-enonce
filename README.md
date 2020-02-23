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
git clone https://github.com/testos944/angular-iut-montreuil-enonce.git
cd angular-iut-montreuil-enonce
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
> Plus de documentation sur RxJs : https://rxjs-dev.firebaseapp.com/api/operators/map, https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap, https://rxjs-dev.firebaseapp.com/api/operators/filter

On veut aussi après avoir édité / créé l'employé, que l'application retourne à la liste des employés.

> Ceci peut s'écrire comme ça:
```
    // go back to /employees
    this.router.navigate(['/employees']);
```

> Attention à ne pas avoir l'employé qui se met à jour lorsqu'on n'a pas encore appuyé sur "submit". Indice, on peut utiliser le "spread" operator pour copier un objet en Javascript/Typescript comme ceci: `let toto = { ... employee}`. Ceci va créer une nouvelle variable toto qui contient une copie des propriétés de employee. ça évite d'avoir fait une simple copie de référence qui fait que lorsqu'on MAJ toto ça MAJ employee aussi.

11. Mini refacto. On a un composant qui fait trop de choses. employee-create est a la fois utilisé pour éditer et pour créer un nouvel employé.

- Vous allez créer deux nouveaux composants : employee-form et employee-edit (rappel de la fonction de scaffolding : `npm run ng g component NOM-DU-COMPOSANT-ICI`).
- employee-form sera réutilisé par employee-create et employee edit de la manière qui suit:
> extrait du template html employee create (pas besoin de modifier le template, mais le .ts si.)
```
<app-employee-form [model]="employee" (onModelChange)="createEmployee($event)"></app-employee-form>
```
- employee-form prend un paramètre 'model' un employee (qui est une variable déclarée sur son parent), et émet un evenement à son parent via la fonction 'onModelChange'. La fonction 'createEmployee' est déclarée sur son parent. Le paramètre $event contiendra un employee.
> extrait de employee-form.ts
```
export class EmployeeFormComponent implements OnInit {
  // ici on déclare attendre un input de type Employee. Le parent de employee-form lui passera en paramètre
  @Input('model') model: Employee;
  // ici on déclare attendre une fonction qui permettra de notifier le parent (pattern observable/observer) dès qu'on click sur on submit
  @Output('onModelChange') onChange: EventEmitter<Employee> = new EventEmitter<Employee>();

  [....]
  onSubmit() {
    this.onChange.emit(this.model);
  }

```
- employee-create s'occupe d'initialiser un employee vide et le passe à employee-form; puis attend le clic sur submit pour créer l'employé
- employee-edit s'occupe de récupérer l'employee via l'id passé en paramètre, puis attend le clic sur on submit pour changer l'employé.
- employee-form conserve la logique de filtration des villes, et des dates pour le datepicker
- employee-create et employee-edit sont les composants déclarés dans les routes de creation et edition

> C'est la base de l'architecture des composants, employee-form est un dumb component, c'est à dire passif. Il n'a pas à savoir comment les données lui sont passées. Les deux autres composants sont des smart components, qui ne font que retrouver la donnée, mais ils ne s'occupent pas du côté présentation (c'est le dumb component qui s'en occupe).

12. On veut ajouter un système de "sort" des employés dans la liste.

Implémenter les 3 boutons suivants pour sort la liste par: Id (le sort par défaut), Name; DateOfBirth.
On doit pouvoir sort dans l'ordre inverse si on clique une seconde fois sur l'un des boutons. Ces boutons vont se situer dans le composant employee-list-component

Note: on va créer une nouvelle méthode dans le service dont la signature est la suivante:
```
getSortedEmployees(sortBy: string, ascending: boolean): Observable<Employee[]>
```

> Documentation javascript de la methode sort: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort

> Attention, l'alternance des couleurs, la suppression et l'édition doivent tjs fonctionner après cette feature de sort.

13. Checklist

Avant de passer à l'étape suivante, pour avoir un maximum de points, assurez vous de ne pas avoir les bugs suivants:
- A la création de l'employé, il faut bien que chaque employé ait son propre id. (Il peut y avoir un petit bug qui fait qu'on pense qu'on ajoute un nouvel employé mais en fait on le garde par référence et on ajoute plein de fois le même dans la liste)
- Lorsqu'on édite un employé, tant qu'on n'a pas appuyé sur "submit", l'employé ne doit pas avoir été changé dans la liste.
- Si je supprime un employé, dans la liste, il y a toujours une alternance de couleurs entre

Avoir les features suivantes:
- Avoir bien séparé edit et create dans leur propre composant, c'est le plus important dans la notation jusqu'ici, avec @Input() et @Output().
- Automatiquement retourner à la liste des employés après edit / creation
- Ne pas permettre d'éditer le nom et le prénom de l'employé dans l'edit, mais à la creation c'est possible
- pouvoir sort by id, name, dateOfBirth, ascending et descending

## Partie C, Ajout d'une librairie tierce pour montrer des statistiques sur nos employés

Pour cette partie, vous avez déjà des exemples de code de tout ce qui est nécessaire avec les TP d'avant. Du coup je vous aide beaucoup moins, sauf si vous avez des stacktraces horribles.

On veut pouvoir traquer nos employés. Nous allons pour cela utiliser une librairie tierce qui s'appelle Highcharts. Il faut notamment:
- Avoir un Pie Chart https://www.highcharts.com/demo/pie-legend qui montre les répartition par ville des employés. N'hesitez pas à changer les villes comme cela vous change dans le fichier employees.json pour avoir des trucs différents de la génération par défaut.
- Avoir un line chart (https://www.highcharts.com/demo/line-labels) avec en en abscisse les années de naissance des employés et en ordonnée la quantité de ceux ci. Il faut une ligne pour les hommes et une pour les femmes. Bonus: ajouter un bouton pour pouvoir merge les hommes et les femmes sur le line chart pour n'avoir qu'une seule ligne.
- Avoir une stacked area (https://www.highcharts.com/demo/area-stacked) qui permet de montrer le cout total des salaires en fonction de la répartition des employés dans 4 buckets d'âge [-25], [25-29], [30-35], [35+]. Si on prend l'exemple de Highcharts, les couleurs seront donc les 4 buckets, et en ordonnée on verra un total de $ que ces employés coutent à l'entreprise.

> Vous aurez besoin de récupérer la liste des employés que j'ai mise à jour, elle contient les salaires et le sexe des employés. c'est sur https://github.com/testos944/angular-iut-montreuil-enonce/blob/master/src/assets/employees.json.

> Il vous faudra coder plusieurs fonctions pour récuperer les employés, les grouper, etc. Je vous remets la doc de RxJs qui permet de bosser avec les observables de angular: https://rxjs-dev.firebaseapp.com/api/operators/map, https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap, https://rxjs-dev.firebaseapp.com/api/operators/filter

1. Pour ajouter highcharts, on va ajouter la librairie à notre projet:
`npm install highcharts --save`
2. On va ensuite créer un composant générique qui permet juste de contenir un chart
`npm run ng g component highcharts-container`
> Exemple du .ts à adapter, je l'ai piqué sur https://www.highcharts.com/blog/post/highcharts-and-angular-7/
```
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);

@Component({
  selector: 'app-highcharts-container',
  templateUrl: './highcharts-container.component.html',
  styleUrls: ['./highcharts-container.component.css']
})
export class HighchartsContainerComponent implements OnInit {
  // options seront supprimées et passées par input après que vous vous assurez que l'exemple fonctionne
  public options: any = {
    chart: {
      type: 'scatter',
      height: 700
    },
    title: {
      text: 'Sample Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) + 'y: ' + this.y.toFixed(2);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Normal',
        turboThreshold: 500000,
        data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
      },
      {
        name: 'Abnormal',
        turboThreshold: 500000,
        data: [[new Date('2018-02-05 18:38:31').getTime(), 7]]
      }
    ]
  }
  constructor() { }

  ngOnInit(){
    Highcharts.chart('container', this.options);
  }
}
```
> le .html
```
<div id="container">
```
> Le div id="container" sera remplacé par la librairie Highcharts qui remplacera ça par ses charts
> Les options seront passées en @Input() par le composant parent. Ici le type est any c'est pour dire qu'on n'a pas besoin de typer la variable. Le composant exemple est juste pour tester que vous voyez bien qqchose au debut.
3. Ajouter d'un menu dans l'application qui va sur la sous page "charts", qui contiendra les 3 charts necessaires
4. Je vous conseille d'avoir 1 composant par chart qu'on souhaite avoir, c'est ce composant qui va se charger de récuperer les employés et de les passer à son fils `highcharts-container`
5. Je vous conseille aussi d'avoir deux @Input() sur `highcharts-container`: un pour les options sans les series, et un pour les series. On pourra ensuite faire un merge des deux avec
```
let optionsAndSeries = {...options, ...series}
```
C'est un peu plus propre.
6. Bon courage!