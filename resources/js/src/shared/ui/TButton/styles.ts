.button {
    outline: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.5rem;
    border: 0;
    border-radius: 0.75rem;
    background-size: cover;
    padding: .625rem;
    line-height: 1.2;
    cursor: pointer;
    text-transform: uppercase;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    transition: background-color .15s,color .15s;
    text-decoration: none !important;

    background: var(--color-primary);
    color: #ffffff;
    --ripple-color: rgba(0, 0, 0, 0.08);

    margin-top: 2.75rem;

    &:hover {
        background-color: var(--color-primary-shade);
    }
}
