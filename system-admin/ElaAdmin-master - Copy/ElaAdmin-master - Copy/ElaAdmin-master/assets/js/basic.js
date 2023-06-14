class Head extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       
    <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png">
    <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css">
    <link rel="stylesheet" href="assets/css/cs-skin-elastic.css">
    <link rel="stylesheet" href="assets/css/lib/datatable/dataTables.bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="styleshhet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>
        `
    }
}

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <!-- Left Panel -->
    <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="index1.html"><i class="menu-icon fa fa-laptop"></i>Dashboard </a>
                    </li>
                    <!-- <li class="menu-title">Extras</li>/.menu-title -->
                    <li class="menu-item-has-children dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false"> <i class="menu-icon fa fa-table"></i>Admin</a>
                    <ul class="sub-menu children dropdown-menu">
                        <li><i class="fa fa-table"></i><a href="system-admin-form.html">Add Admin</a></li>
                    </ul>
                </li>

                <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"> <i class="menu-icon fa fa-table"></i>College-Admin</a>
                <ul class="sub-menu children dropdown-menu">
                    <li><i class="fa fa-table"></i><a href="college-admin-form.html">Add College-Admin</a></li>
                    <li><i class="fa fa-table"></i><a href="college-admin-home.html">Manage College-Admin</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"> <i class="menu-icon fa fa-table"></i>Faculty</a>
                <ul class="sub-menu children dropdown-menu">
                    <li><i class="fa fa-table"></i><a href="faculty-form.html">Add Faculty</a></li>
                    <li><i class="fa fa-table"></i><a href="faculty-home.html">Manage Faculty</a></li>
                    </ul>
                </li>

        <!--
                <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"> <i class="menu-icon fa fa-table"></i>Course</a>
                <ul class="sub-menu children dropdown-menu">
                    <li><i class="fa fa-table"></i><a href="course-form.html">Add Course</a></li>
                    <li><i class="fa fa-table"></i><a href="course-home.html">Manage Course</a></li>
                    </ul>
                </li>

                <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false"> <i class="menu-icon fa fa-table"></i>Subjects</a>
                <ul class="sub-menu children dropdown-menu">
                    <li><i class="fa fa-table"></i><a href="subject-form.html">Add Subject</a></li>
                    <li><i class="fa fa-table"></i><a href="subject-home.html">Manage Subject</a></li>
                    </ul>
                </li> -->
                </ul>
            </div><!-- /.navbar-collapse -->
        </nav>
    </aside>
    <!-- /#left-panel -->
    <!-- Right Panel -->
    <div id="right-panel" class="right-panel">
        <!-- Header-->
        <header id="header" class="header">
            <div class="top-left">
                <div class="navbar-header">
                    <a class="navbar-brand" href="./"><b>Welcome Admin</b></a>
                    <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
                </div>
            </div>
            <div class="user-area dropdown float-right">
                <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <img class="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar">
                </a>

                <div class="user-menu dropdown-menu">
                    <!-- <a class="nav-link" href="#"><i class="fa fa- user"></i>My Profile</a> -->
                    <a class="nav-link" href="#"><i class="fa fa-power -off"></i>Logout</a>
                </div>
            </div>
        </header>
    </div>
        `
    }
}
//Footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <footer class="site-footer">
        <div class="footer-inner bg-white">
            <div class="row">
                <div class="col-sm-6">
                    Copyright &copy; 2023 ASAS
                </div>
                
            </div>
        </div>
    </footer>
        `

    }
}

class JS extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
        <script src="assets/js/vendor/bootstrap.min.js"></script>
        <script src="assets/js/vendor/slick.min.js"></script>
        <script src="assets/js/vendor/counterup.min.js"></script>
        <script src="assets/js/vendor/waypoints.min.js"></script>
        <script src="assets/js/vendor/easing.min.js"></script>
        <script src="assets/js/vendor/meanmenu.min.js"></script>
        <script src="assets/js/vendor/jquery.magnific-popup.js"></script>
        <script src="assets/js/vendor/wow.min.js"></script>
        <script src="assets/js/main.js"></script>
        `
    }
}

customElements.define('main-header', Header);
customElements.define('main-css', Head)
customElements.define('main-js', JS)
customElements.define('main-footer', Footer);