<div class="container">
    <h3 style="text-align: center; margin-bottom: 30px;">Modal Demo</h3>
    <p style="text-align: center; margin-bottom: 30px;">Click the buttons below to demo some different types of modals in Bootstrap.</p>
    <div class="row" style="text-align: center;">

        <div class="col-4">

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                Launch Modal
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Test Modal</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>This is a modal that was triggered by a button click.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--col-->

        <div class="col-4">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Center Modal Example</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>This modal was triggered by a button and is a center modal example</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!--col-->
        <div class="col-4">

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Static Modal</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>This is a staic modal which means you have to click WITHIN this modal (button below, or X
                                in top right) to exit it.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--col-->
    </div> <!-- row -->


    <div id="progressBar">


        <h3 style="text-align: center; margin-bottom: 30px; margin-top: 30px;">Progress Bar</h3>
        <p style="text-align: center; margin-bottom: 30px; margin-top: 30px;">Break Down of Time at School</p>

        <div class="progress" style="margin-bottom: 10px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
                aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" style="width: 66%"></div>
        </div>
        <div>
            <p>66% School Work</p>
        </div>
        <div class="progress" style="margin-bottom: 10px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"
                aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%"></div>
        </div>
        <div>
            <p>10% Down Time</p>
        </div>
        <div class="progress" style="margin-bottom: 10px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
                aria-valuenow="24" aria-valuemin="0" aria-valuemax="100" style="width: 24%"></div>
        </div>
        <div>
            <p>24% Studying</p>
        </div>
        <div class="progress" style="margin-bottom: 10px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar"
                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
        </div>
        <div>
            <p>100% Having Fun</p>
        </div>
    </div>

    <div>
        <h3 style="text-align: center; margin-bottom: 30px; margin-top: 30px;">Popovers</h3>
        <p style="text-align: center; margin-bottom: 30px; margin-top: 30px;">Demo of Popovers in Bootstrap</p>

        <div style="text-align: center">
                <div style="margin-top: 3em;">
                        <button type="button" class="btn btn-danger" data-container="body" data-toggle="popover"
                            data-placement="top" data-content="This is a top popover.">
                            Popover on top
                        </button>
                    </div>
                    <div style="margin-top: 3em;">
                        <button type="button" class="btn btn-warning" data-container="body" data-toggle="popover"
                            data-placement="right" data-content="This is a right popover.">
                            Popover on right
                        </button>
                    </div>
                    <div style="margin-top: 3em;">
                        <button type="button" class="btn btn-dark" data-container="body" data-toggle="popover"
                            data-placement="bottom" data-content="This is a bottom popover.">
                            Popover on bottom
                        </button>
                    </div>
                    <div style="margin-top: 3em;">
                        <button type="button" class="btn btn-success" data-container="body" data-toggle="popover"
                            data-placement="left" data-content="This is a left popover.">
                            Popover on left
                        </button>
                    </div>
            
                </div>
        </div>
        

</div><!--Container-->