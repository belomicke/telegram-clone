import { HeaderButton } from './HeaderButton'
import { HeaderSearch } from './HeaderSearch'
import { Container } from './styles'

interface props {
    stateBack: boolean
    searchQuery: string
    isFetching: boolean
    dropdownButtonClickHandler: () => void
    searchInputChangeHandler: (value: string) => void
    searchInputFocusHandler: () => void
}

export const Header = ({
    stateBack,
    searchQuery,
    isFetching,
    dropdownButtonClickHandler,
    searchInputChangeHandler,
    searchInputFocusHandler
}: props) => {
    return (
        <Container>
            <HeaderButton
                stateBack={stateBack}
                onClick={dropdownButtonClickHandler}
            />
            <HeaderSearch
                value={searchQuery}
                onChange={(e) => searchInputChangeHandler(e.target.value)}
                isLoading={isFetching}
                onFocus={searchInputFocusHandler}
            />
        </Container>
    )
}
