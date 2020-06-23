package app.example.api.rest.root;

import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api")
public class RootRestController {

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public HttpEntity<RootModel> root() {
        var model = new RootModel();
        model.add(linkTo(methodOn(getClass()).root()).withSelfRel());

        // todo: links to authenticated endpoints

        return ok(model);
    }
}
