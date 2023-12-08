# CLIENT ROUTES

**Introduction:**


| URL                           | Description                   | Protected |
| ----------------------------- | ----------------------------- | --------- |
| `/`                           | Index page                    |           |
| `/registro`                   | New user page                 |           |
| `/inicio-sesion`              | Login page                    |           |
| `/perfil/:userId`             | User profile page             | ✔         |  
| `/perfil/:userId/editar`      | Edit profile page             | ✔         |
| `/perfil/:userId/eliminar`    | Delete profile page           | ✔         |
| `/participantes`              | All profiles page             |           |
| `/participantes/:_userid`     | Specific profile details page |           |  
| `/crear-publicacion/`         | Create a post page            | ✔         |
| `/publicacion/:id/editar`     | Edit a post page              | ✔         |
| `/publicacion/:id/eliminar`   | Delete a post page            | ✔         |
| `/publicacion/:id/`           | Post details page             | ✔         |  
| `/ultimas-publicaciones`      | Post list page                | ✔         | 
| `/documentos/subir/`          | Add document page             | ✔         |
| `/documentos/eliminar`        | Delete document page          | ✔         |
| `/documento/:id`              | Document details page         | ✔         |  
| `*`                           | 404 page                      |           |