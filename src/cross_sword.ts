/**
 * Main class for the CrossSword app.
 */
export class CrossSword {
}

/**
 * Proposal:
 *   - Three levels of control: Tray > Word > Cell.
 *   - Navigation events are handled at the top level by a specialized navigation event handler,
 *     which communicates with the Tray to forward navigation events. The Tray communicates with
 *     the active Word as necessary to execute the navigation command supplied by the handler.
 *   - Focus events are handled in a bottom-up fashion: the Cell that receives focus alerts its
 *     Word and the Word alerts the Tray. The Tray notifies the previously focused Word, which
 *     unfocuses its Cells. The Tray then updates its conception of which Word is active to the
 *     newly focused Word.
 */
