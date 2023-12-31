/**
 * step 1: Create a context initial value null and export it
 * step 2: set the <AuthContextProvider> as parent component where you kept your router provider (in this app we kept our routes in App.jsx)
 * step 3: put all the function or variable (or anything you want to pass through context) inside a object
 * step 4: return <YourContextName.Provider> and inside that keep the {children} prop
 * step 5: Receive The Context In Any Children Element using useContext hook & inside that hook pass your context name
 */
