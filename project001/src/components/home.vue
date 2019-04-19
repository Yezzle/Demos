<template>
   <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <!-- Just an image -->
                    <a class="navbar-brand" href="#">
                        <img src="../assets/imgs/logo.svg" width="30" height="30" alt="">
                    </a>
                <a class="navbar-brand" href="#">子老测</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"> 找工作 <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#"> 借仪器</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                测绘论坛
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">数据处理疑难杂症</a>
                                <a class="dropdown-item" href="#">设备保养手册</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">测绘之声</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">更多</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
                    </form>
                </div>
            </nav>
        </div>
</template>
<script>
    export default {
        name: 'home',
    }
</script>