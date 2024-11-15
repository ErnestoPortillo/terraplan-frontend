import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/Login/login.component';
import { UserComponent } from './components/User/user.component';
import { ListaruserComponent } from './components/User/listaruser/listaruser.component';
import { CrearUserComponent } from './components/User/creaedita/creaeditauser.component';
import { RoleComponent } from './components/Role/role.component';
import { ListarRoleComponent } from './components/Role/listarrole/listarrole.component';
import { CrearRoleComponent } from './components/Role/creaedita/creaeditarole.component';
import { ProyectoComponent } from './components/Proyecto/proyecto.component';
import { ListarProyectoComponent } from './components/Proyecto/listarproyecto/listarproyecto.component';
import { CrearProyectoComponent } from './components/Proyecto/creaedita/creaeditaproyecto.component';
import { PlanoComponent } from './components/Plano/plano.component';
import { ListarPlanoComponent } from './components/Plano/listarplano/listarplano.component';
import { CrearPlanoComponent } from './components/Plano/creaedita/creaeditaplano.component';
import { MaterialComponent } from './components/material/material.component';
import { ListarmaterialComponent } from './components/material/listarmaterial/listarmaterial.component';
import { CreaeditamaterialComponent } from './components/material/creaeditamaterial/creaeditamaterial.component';
import { PermisoComponent } from './components/permiso/permiso.component';
import { ListarpermisoComponent } from './components/permiso/listarpermiso/listarpermiso.component';
import { CreaeditapermisoComponent } from './components/permiso/creaeditapermiso/creaeditapermiso.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { ListarnotificacionComponent } from './components/notificacion/listarnotificacion/listarnotificacion.component';
import { CreaeditanotificacionComponent } from './components/notificacion/creaeditanotificacion/creaeditanotificacion.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'usuarios', component: UserComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ListaruserComponent },
        { path: 'crear', component: CrearUserComponent },
        { path: 'editar/:id', component: CrearUserComponent }  // Add this line for editing
    ]},
    { path: 'rol', component: RoleComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ListarRoleComponent },
        { path: 'crear', component: CrearRoleComponent },
        { path: 'editar/:id', component: CrearRoleComponent }
    ]},
    { path: 'proyectos', component: ProyectoComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ListarProyectoComponent },
        { path: 'crear', component: CrearProyectoComponent },
        { path: 'editar/:id', component: CrearProyectoComponent }  // Add this line for editing
    ]},
    { path: 'planos', component: PlanoComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ListarPlanoComponent },
        { path: 'crear', component: CrearPlanoComponent },
        { path: 'editar/:id', component: CrearPlanoComponent }  // Add this line for editing
    ]},
    { path: 'materiales', component: MaterialComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ListarmaterialComponent },
        { path: 'crear', component: CreaeditamaterialComponent },
        { path: 'editar/:id', component: CreaeditamaterialComponent }  // Add this line for editing
    ]},
    { path: 'permisos', component: PermisoComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ListarpermisoComponent },
        { path: 'crear', component: CreaeditapermisoComponent },
        { path: 'editar/:id', component: CreaeditapermisoComponent }  // Add this line for editing
    ]},
    { path: 'notificaciones', component: NotificacionComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ListarnotificacionComponent },
        { path: 'crear', component: CreaeditanotificacionComponent },
        { path: 'editar/:id', component: CreaeditanotificacionComponent }  // Add this line for editing
    ]},

    { path: '**', redirectTo: 'login' }
];
