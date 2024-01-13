import React from 'react'
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@material-ui/core'

function AdminPage() {
    return (
        <div className="AdminTemplate">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent">
                <List>
                    <ListItem button>
                        <ListItemText primary="Categories" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Threads" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Users" />
                    </ListItem>
                </List>
            </Drawer>
            <main>
                
            </main>
        </div>
    )
}

export default AdminPage